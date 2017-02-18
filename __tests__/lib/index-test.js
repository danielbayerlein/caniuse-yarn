describe('caniuseYarn', () => {
  const caniuseYarn = require('../../lib'); // eslint-disable-line global-require
  const shelljs = require('shelljs'); // eslint-disable-line global-require

  beforeEach(() => {
    shelljs.which = jest.fn();
  });

  it('returns true if yarn is available', () => {
    shelljs.which.mockReturnValue(true);
    expect(caniuseYarn()).toBeTruthy();
  });

  it('returns false if yarn is not available', () => {
    shelljs.which.mockReturnValue(false);
    expect(caniuseYarn()).toBeFalsy();
  });
});
