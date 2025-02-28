export class Config {
  serverEndpoint = "http://localhost:5200";
  sponsorImageUrls: string[] = [];
  sponsorImageRotateSpeed = 5000; // in milliseconds

  attackerColorPrimary = "#dc052d";
  attackerColorSecondary = "#dc052d";
  attackerColorShieldCurrency = "#ffffff";

  defenderColorPrimary = "#00008B";
  defenderColorSecondary = "#00008B";
  defenderColorShieldCurrency = "#6a7cea";

  public constructor(init?: Partial<Config>) {
    Object.assign(this, init);
  }
}
