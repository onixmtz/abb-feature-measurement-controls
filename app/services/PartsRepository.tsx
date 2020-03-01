import axios from "axios";
import IPart from "../../lib/entities/interfaces/IPart";
import IPartsRemoteRepository from "../../lib/entities/interfaces/IPartsRemoteRepository";


export type ApiListResponse = { parts: Array<{ partId: string }> }

class PartsRepository implements IPartsRemoteRepository {
  static POLLING_INTERVAL_MS = 1000;

  async list(): Promise<string[]> {
    const apiResponse = await axios.get<ApiListResponse>("https://abb.mnode.net/parts/list");
    return apiResponse.data.parts.map(part => part.partId);
  }

  subscribe(partId: string, onDataChange: (part: IPart) => void, onError?: (error: string) => void): () => void {
    const mockedPolling = async () => {
      try {
        const apiResponse = await axios.get<IPart>(`https://abb.mnode.net/parts/${partId}`);
        onDataChange(apiResponse.data);
      } catch (e) {
        onError(e);
      }
    }
    mockedPolling();
    const interval = setInterval(mockedPolling, PartsRepository.POLLING_INTERVAL_MS);
    return () => clearInterval(interval);
  }

  static getInstance(): IPartsRemoteRepository {
    return new PartsRepository();
  }
};

export default PartsRepository; 