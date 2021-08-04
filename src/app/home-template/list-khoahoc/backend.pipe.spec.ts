import { BackendPipe } from './backend.pipe';

describe('BackendPipe', () => {
  it('create an instance', () => {
    const pipe = new BackendPipe();
    expect(pipe).toBeTruthy();
  });
});
