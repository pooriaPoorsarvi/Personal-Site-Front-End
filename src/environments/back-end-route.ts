

export class BackEndRoute{
  public addressArray: string[];
  constructor(public address: string){
    this.addressArray = this.address.split('/');
  }
}


export const backEndRoutes =  {
  'sign-up' : new BackEndRoute('/users'),
};


