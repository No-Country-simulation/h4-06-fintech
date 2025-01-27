export class Wallet {
  constructor(
    public id: string,
    public userId: string,
    public balancePesos: number,
    public balanceDollars: number,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  isSufficientBalance(currency: 'PESOS' | 'DOLLARS', amount: number): boolean {
    if (currency === 'PESOS') {
      return this.balancePesos >= amount;
    }
    return this.balanceDollars >= amount;
  }

  updateBalance(currency: 'PESOS' | 'DOLLARS', amount: number): void {
    if (currency === 'PESOS') {
      this.balancePesos += amount;
    } else {
      this.balanceDollars += amount;
    }
  }
}
