import { SoundifyPlayerPage } from './app.po';

describe('soundify-player App', () => {
  let page: SoundifyPlayerPage;

  beforeEach(() => {
    page = new SoundifyPlayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
