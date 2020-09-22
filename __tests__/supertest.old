const request = require('supertest');
const app = require('../server/server.js');
// const server = 'http://localhost:3000';




// Things to test for:

// Test endpoints/paths are working correctly (e.g. localhost/verify etc)
    // /verify responds with 200 status and res.locals.name and res.locals.verifiedjwt exist
// fetch/API calls 
    // /twitter, /twitter/callback
    // localhost/callback
    // localhost/callback/google

// Stretch: socket connection is working 
    // https://stackoverflow.com/questions/15509231/unit-testing-node-js-and-websockets-socket-io
    // https://medium.com/@basavarajkn/integration-testing-websocket-server-in-node-js-2997d107414c
    
describe('Route testing', () => {

  describe("'/' endpoint", () => {
    it('should respond with 200 status code', (done) => {
      return request(app)
        .get('/')
        .expect(200, done);
    });
    it('should respond with Content-Type equal to text/html', (done)=>{
        return request(app)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200, done);
    })
  });

  xdescribe("'/callback' endpoint", () => {
    


  });
  xdescribe("'/api' endpoint", () => {

  });
  
  describe("'/verify' endpoint", () => {
    const locals = {
      ssid: 'abc123',
    }

    const realSSID = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IktDaGFudGFsIiwiaWQiOjQ0NDcxMDk5LCJub2RlX2lkIjoiTURRNlZYTmxjalEwTkRjeE1EazUiLCJhdmF0YXJfdXJsIjoiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS80NDQ3MTA5OT92PTQiLCJncmF2YXRhcl9pZCI6IiIsInVybCI6Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvS0NoYW50YWwiLCJodG1sX3VybCI6Imh0dHBzOi8vZ2l0aHViLmNvbS9LQ2hhbnRhbCIsImZvbGxvd2Vyc191cmwiOiJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0tDaGFudGFsL2ZvbGxvd2VycyIsImZvbGxvd2luZ191cmwiOiJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0tDaGFudGFsL2ZvbGxvd2luZ3svb3RoZXJfdXNlcn0iLCJnaXN0c191cmwiOiJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0tDaGFudGFsL2dpc3Rzey9naXN0X2lkfSIsInN0YXJyZWRfdXJsIjoiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9LQ2hhbnRhbC9zdGFycmVkey9vd25lcn17L3JlcG99Iiwic3Vic2NyaXB0aW9uc191cmwiOiJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0tDaGFudGFsL3N1YnNjcmlwdGlvbnMiLCJvcmdhbml6YXRpb25zX3VybCI6Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvS0NoYW50YWwvb3JncyIsInJlcG9zX3VybCI6Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvS0NoYW50YWwvcmVwb3MiLCJldmVudHNfdXJsIjoiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9LQ2hhbnRhbC9ldmVudHN7L3ByaXZhY3l9IiwicmVjZWl2ZWRfZXZlbnRzX3VybCI6Imh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvS0NoYW50YWwvcmVjZWl2ZWRfZXZlbnRzIiwidHlwZSI6IlVzZXIiLCJzaXRlX2FkbWluIjpmYWxzZSwibmFtZSI6IktpbSIsImNvbXBhbnkiOm51bGwsImJsb2ciOiIiLCJsb2NhdGlvbiI6bnVsbCwiZW1haWwiOm51bGwsImhpcmVhYmxlIjpudWxsLCJiaW8iOm51bGwsInB1YmxpY19yZXBvcyI6OCwicHVibGljX2dpc3RzIjowLCJmb2xsb3dlcnMiOjMsImZvbGxvd2luZyI6MiwiY3JlYXRlZF9hdCI6IjIwMTgtMTAtMjVUMTM6NDM6MjJaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDUtMTRUMTM6MDE6MDRaIiwicHJpdmF0ZV9naXN0cyI6MCwidG90YWxfcHJpdmF0ZV9yZXBvcyI6MzMsIm93bmVkX3ByaXZhdGVfcmVwb3MiOjQsImRpc2tfdXNhZ2UiOjE5NTk4LCJjb2xsYWJvcmF0b3JzIjowLCJ0d29fZmFjdG9yX2F1dGhlbnRpY2F0aW9uIjpmYWxzZSwicGxhbiI6eyJuYW1lIjoiZnJlZSIsInNwYWNlIjo5NzY1NjI0OTksImNvbGxhYm9yYXRvcnMiOjAsInByaXZhdGVfcmVwb3MiOjEwMDAwfSwiaWF0IjoxNTg5NDkxODg1LCJleHAiOjE1ODk0OTU0ODV9.akqsvkptkRWPUowr-sGhq-lyPm-ds2D2zX6M1B_2_TQ'

    it('should have valid jwt', (done) => {
      return request(app)
        .get('/verify')
        .set('Cookie', [`ssid=${realSSID}`])
        // .expect((res) => {
        //   expect(res.locals.name).not.toBe(undefined);
        //   expect(res.locals.verifiedjwt).not.toBe(undefined);
        // })
        .expect(200, done);
    })
  });

  xdescribe("'/twitter' endpoint", () => {

  });

  
});
