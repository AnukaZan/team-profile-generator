const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('Jessica', '4', 'jessica@gmail.com');

    expect(manager.name).toBe('Jessica');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('jessica@gmail.com');
})

test('get office number', () => {
    const manager = new Manager('Jessica', '4', 'jessica@gmail.com', 123);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('get Manager as role', () => {
    const manager = new Manager('Jessica', '4', 'jessica@gmail.com', 123);

    expect(manager.getRole()).toBe('Manager');
})