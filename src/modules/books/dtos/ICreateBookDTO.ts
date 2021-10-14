interface ICreateBookDTO {
  id?: string;

  title: string;

  publishing_company: string;

  picture: string;

  authors: [];
}

export { ICreateBookDTO };
