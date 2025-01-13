export class Wallet {
  constructor(
    public id: string,
    public userId: string,
    public balancePesos: number,
    public balanceDollars: number,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
