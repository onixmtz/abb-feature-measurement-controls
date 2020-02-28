import IPart from "./IPart";


type IPartsRepository = {
  list: () => {partId: string}[],
  subscribe: (
    partId: string,
    onDataChange: (part: IPart) => void
  ) => () => void;
};

export default IPartsRepository;