import IPart from "./IPart";


type IPartsRemoteRepository = {
  list: () => Promise<string[]>,
  subscribe: (
    partId: string,
    onDataChange: (part: IPart) => void,
    onError: (error: string) => void,
  ) => () => void;
};

export default IPartsRemoteRepository;