import { classNames } from './classNames';

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional params', () => {
        const params = ['someClass', {}, ['class1', 'class2']];
        const expectedResult = 'someClass class1 class2'
        expect(classNames.apply(null, params)).toBe(expectedResult);
    });
    test('with mods', () => {
        const params = ['someClass', { active: true }, ['class1', 'class2']];
        const expectedResult = 'someClass active class1 class2'
        expect(classNames.apply(null, params)).toBe(expectedResult);
    });
    test('with falsy mod', () => {
        const params = [
            'someClass',
            { active: false, disabled: true },
            ['class1', 'class2']
        ];
        const expectedResult = 'someClass disabled class1 class2'
        expect(classNames.apply(null, params)).toBe(expectedResult);
    });
});
