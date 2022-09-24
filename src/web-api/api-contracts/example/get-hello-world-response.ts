import {
  helloWorldDTO,
} from '../../../domain/domain-contracts/example/hello-world-dto';

type getHelloWorldResponse = {
    message: string;
    id: number;
}


const getHelloWorldResponseMapper = (data: helloWorldDTO) => {
  return {
    message: data.message,
    id: data.id,
  } as getHelloWorldResponse;
};

export {getHelloWorldResponse, getHelloWorldResponseMapper};
