const Employee = require('../lib/Employee.js');

test('creates new Employee object', () => {
    const employee = new Employee('Keith', '3', 'keith@net.com');

    expect(employee.name).toBe('Keith');
    expect(employee.id).toBe('3');
    expect(employee.email).toBe('keith@net.com');
});

test('get employee name', () => {
    const employee = new Employee('Keith', '3', 'keith@net.com');

    expect(employee.getName()).toBe('Keith');
});

test('get employee email', () => {
    const employee = new Employee('Keith', '3', 'keith@net.com');

    expect(employee.getEmail()).toBe('keith@net.com');
})

test('get employee id', () => {
    const employee = new Employee('Keith', '3', 'keith@net.com');

    expect(employee.getId()).toBe('3');
})

test('get employee role', () => {
    const employee = new Employee('Keith', '3', 'keith@net.com');

    expect(employee.getRole()).toBe('Employee');
})