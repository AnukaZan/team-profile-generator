//const { default: test } = require('node:test');
const Intern = require('../lib/Intern');

test('creates intern object', ()=>{
    const intern = new Intern('Rock', '10', 'rock@rock.com', 'UCSD');

    expect(intern.name).toBe('Rock');
    expect(intern.id).toBe('10');
    expect(intern.email).toBe('rock@rock.com');
    expect(intern.school).toBe('UCSD');
})

test('get school name', () => {
    const intern = new Intern('Rock', '10', 'rock@rock.com', 'UCSD');

    expect(intern.getSchool()).toBe('UCSD');
})

test('get Intern as role', () => {
    const intern = new Intern('Rock', '10', 'rock@rock.com', 'UCSD');

    expect(intern.getRole()).toBe('Intern');
})