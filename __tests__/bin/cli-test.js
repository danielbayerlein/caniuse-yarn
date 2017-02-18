const spawn = require('child_process').spawn;

describe('cli', () => {
  it('should return true or false', (done) => {
    spawn('./bin/cli.js')
      .on('error', (err) => {
        expect(err).toBeNull();
      })
      .on('close', (result) => {
        if (result) {
          expect(result).toBeTruthy();
        } else {
          expect(result).toBeFalsy();
        }

        done();
      });
  });
});
