export function safeParse(schema, data) {
try {
const result = schema.safeParse(data);
return result;
} catch (e) {
return { success: false, error: 'parse_error' };
}
}