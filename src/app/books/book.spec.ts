import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    expect(new Book(1, 'Title', 'Author', 9.99)).toBeTruthy();
  });
});
