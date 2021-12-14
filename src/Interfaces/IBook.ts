export default interface IBook {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
}


export const mapResponseToBookArray = (response: any): any[] => {
    const books: IBook[] = [];
    response.forEach((book: any) => {
        books.push({
            title: book.title,
            subtitle: book.subtitle,
            isbn13: book.isbn13,
            price: book.price,
            image: book.image,
            url: book.url
        });
    });
    return books;
};