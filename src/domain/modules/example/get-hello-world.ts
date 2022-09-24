import {helloWorldDTO} from '../../domain-contracts/example/hello-world-dto';


const getHelloWorldById = async (id: number) => {
  return {
    id: id,
    message: 'Hello World',
  } as helloWorldDTO;
};


export {getHelloWorldById};
