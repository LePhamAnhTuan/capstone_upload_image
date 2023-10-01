import * as bcrypt from 'bcrypt';

export function hashPassword(password: string) {
    return bcrypt.hashSync(password, 8)
}
export function deCodePassword(hashPassword: string, rawPassword: string) {
    return bcrypt.compareSync(hashPassword, rawPassword)
} 
