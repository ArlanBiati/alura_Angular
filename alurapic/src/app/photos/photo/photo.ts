// As interfaces são utilizadas para tiparmos o retorno da nossa API, desta forma facilitamos a manutenção e diminuimos a quantidade de erros que possam existir
export interface Photo {

  id: number,
  postDate: Date,
  url: string,
  description: string,
  allowComments: boolean,
  likes: number,
  comments: number,
  userId: number
}
