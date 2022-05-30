export interface ITypeDatabase{
  mongo: IMongoConfig;
  mysql: IMysqlConfig;
}

export interface IMongoConfig {
  host: string;
  port: string;
  db_name: string;
}

export interface IMysqlConfig {
  host: string;
  port: string;
  username: string;
  password: string;
  db_name: string;
}
