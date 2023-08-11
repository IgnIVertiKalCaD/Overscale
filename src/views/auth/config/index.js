const rulesLogin = [
    value => {
        const pattern = /^(?!.*[А-Яа-я]).+$/;
        return pattern.test(value) || 'inputs.rules.login.invalidLogin'
    },
    value => {
        const pattern = /^.{3,16}$/;
        return pattern.test(value) || 'inputs.rules.login.minMaxLength'
    }
]
const rulesPassword = [
    value => {
        const pattern = /^(?!.*[А-Яа-я]).+$/;
        return pattern.test(value) || 'inputs.rules.password.invalidPassword'
    },
    value => {
        const pattern = /.{6,32}$/;
        return pattern.test(value) || 'inputs.rules.password.minMaxLength'
    },
    value => {
        const pattern = /^(?=.*[A-Z]).+$/;
        return pattern.test(value) || 'inputs.rules.password.needUpperCaseChar'
    },
    value => {
        const pattern = /^(?=.*\d).+$/;
        return pattern.test(value) || 'inputs.rules.password.needDigit'
    },
]
const rulesEmail = [
    value => {
        const pattern = /^[\w.-]+@(?:gmail|yandex|mail|rambler|yahoo)\.(?:com|ru)$/;
        return pattern.test(value) || 'inputs.rules.email.invalidEmail'
    }
]

const loginSection = [
    {
        rule: [...rulesLogin],
        maxSymbols: 16,
        type: 'username',
        placeholder: 'Имя пользователя или Email',
        icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
          '<g clip-path="url(#clip0_276_33)">\n' +
          '<path d="M16 0C7.11111 0 0 7.11111 0 16C0 24.8889 7.11111 32 16 32C24.8889 32 32 24.8889 32 16C32 7.11111 24.8889 0 16 0ZM7.64444 26.4889C9.77778 24.1778 12.8 22.7556 16 22.7556C19.2 22.7556 22.2222 24.1778 24.3556 26.4889C22.0444 28.2667 19.2 29.3333 16 29.3333C12.8 29.3333 9.95556 28.2667 7.64444 26.4889ZM26.3111 24.5333C23.6444 21.6889 19.9111 19.9111 16 19.9111C12.0889 19.9111 8.35556 21.5111 5.68889 24.5333C3.73333 22.2222 2.66667 19.2 2.66667 16C2.66667 8.71111 8.71111 2.66667 16 2.66667C23.2889 2.66667 29.3333 8.71111 29.3333 16C29.3333 19.2 28.0889 22.2222 26.3111 24.5333Z" fill="#8F8F94"/>\n' +
          '<path d="M16 6.39999C12.6222 6.39999 9.95557 9.06666 9.95557 12.4444C9.95557 15.8222 12.6222 18.4889 16 18.4889C19.3778 18.4889 22.0445 15.8222 22.0445 12.4444C22.0445 9.06666 19.3778 6.39999 16 6.39999ZM16 15.8222C14.2222 15.8222 12.6222 14.2222 12.6222 12.4444C12.6222 10.6667 14.2222 9.06666 16 9.06666C17.7778 9.06666 19.3778 10.6667 19.3778 12.4444C19.3778 14.2222 17.7778 15.8222 16 15.8222Z" fill="#8F8F94"/>\n' +
          '</g>\n' +
          '<defs>\n' +
          '<clipPath id="clip0_276_33">\n' +
          '<rect width="32" height="32" fill="white"/>\n' +
          '</clipPath>\n' +
          '</defs>\n' +
          '</svg>`
    },
]
const firstPasswordSection = [
    {
        type: 'password',
        placeholder: 'Пароль',
        maxSymbols: 32,
        rule: [...rulesPassword],
        icon: `<svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 8V12H19V8C18.9583 6.58333 18.4792 5.39583 17.5625 4.4375C16.6042 3.52083 15.4167 3.04167 14 3C12.5833 3.04167 11.3958 3.52083 10.4375 4.4375C9.52083 5.39583 9.04167 6.58333 9 8ZM6 12V8C6.04167 5.75 6.8125 3.85417 8.3125 2.3125C9.85417 0.8125 11.75 0.041666 14 0C16.25 0.041666 18.1458 0.8125 19.6875 2.3125C21.1875 3.85417 21.9583 5.75 22 8V12H24C25.125 12.0417 26.0625 12.4375 26.8125 13.1875C27.5625 13.9375 27.9583 14.875 28 16V28C27.9583 29.125 27.5625 30.0625 26.8125 30.8125C26.0625 31.5625 25.125 31.9583 24 32H4C2.875 31.9583 1.9375 31.5625 1.1875 30.8125C0.4375 30.0625 0.0416667 29.125 0 28V16C0.0416667 14.875 0.4375 13.9375 1.1875 13.1875C1.9375 12.4375 2.875 12.0417 4 12H6ZM3 16V28C3.04167 28.625 3.375 28.9583 4 29H24C24.625 28.9583 24.9583 28.625 25 28V16C24.9583 15.375 24.625 15.0417 24 15H4C3.375 15.0417 3.04167 15.375 3 16Z" fill="#8F8F94"/></svg> `,
        isToggleField: true
    }
]
const secondPasswordSection = [
    {
        type: 'password',
        placeholder: 'Подтверждение пароля',
        maxSymbols: 32,
        rule: [...rulesPassword],
        icon: `<svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 8V12H19V8C18.9583 6.58333 18.4792 5.39583 17.5625 4.4375C16.6042 3.52083 15.4167 3.04167 14 3C12.5833 3.04167 11.3958 3.52083 10.4375 4.4375C9.52083 5.39583 9.04167 6.58333 9 8ZM6 12V8C6.04167 5.75 6.8125 3.85417 8.3125 2.3125C9.85417 0.8125 11.75 0.041666 14 0C16.25 0.041666 18.1458 0.8125 19.6875 2.3125C21.1875 3.85417 21.9583 5.75 22 8V12H24C25.125 12.0417 26.0625 12.4375 26.8125 13.1875C27.5625 13.9375 27.9583 14.875 28 16V28C27.9583 29.125 27.5625 30.0625 26.8125 30.8125C26.0625 31.5625 25.125 31.9583 24 32H4C2.875 31.9583 1.9375 31.5625 1.1875 30.8125C0.4375 30.0625 0.0416667 29.125 0 28V16C0.0416667 14.875 0.4375 13.9375 1.1875 13.1875C1.9375 12.4375 2.875 12.0417 4 12H6ZM3 16V28C3.04167 28.625 3.375 28.9583 4 29H24C24.625 28.9583 24.9583 28.625 25 28V16C24.9583 15.375 24.625 15.0417 24 15H4C3.375 15.0417 3.04167 15.375 3 16Z" fill="#8F8F94"/></svg> `,
        isToggleField: true
    }
]
const emailSection = [
    {
        rule: [...rulesEmail],
        maxSymbols: 50,
        type: 'email',
        placeholder: 'example@gmail.com',
        icon: `<svg width="32" height="32" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3C3.45 3 3 3.45 3 4V5.38125L13.7812 14.2313C15.075 15.2938 16.9312 15.2938 18.225 14.2313L29 5.38125V4C29 3.45 28.55 3 28 3H4ZM3 9.2625V20C3 20.55 3.45 21 4 21H28C28.55 21 29 20.55 29 20V9.2625L20.125 16.55C17.725 18.5187 14.2688 18.5187 11.875 16.55L3 9.2625ZM0 4C0 1.79375 1.79375 0 4 0H28C30.2062 0 32 1.79375 32 4V20C32 22.2062 30.2062 24 28 24H4C1.79375 24 0 22.2062 0 20V4Z" fill="#8F8F94"/></svg> `
    }
]
export const RulesForRenderAuthRegistration = {
    authList: [
        ...loginSection,
        ...firstPasswordSection
    ],
    regList: [
        ...loginSection,
        ...emailSection,
        ...firstPasswordSection,
        ...secondPasswordSection
    ],
    recoveryPassword: [
        ...emailSection
    ],
}