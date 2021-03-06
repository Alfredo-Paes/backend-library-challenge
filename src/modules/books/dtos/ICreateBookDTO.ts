interface ICreateBookDTO {
  id?: string;

  title: string;

  publishing_company: string;

  picture: string;

  authors: string[];
}

export { ICreateBookDTO };
