export const reactHookFormAutoWiring = `<input {...register('email')} type="email" />
{errors.email && <div>{errors.email.message}</div>}

<button type="submit">Submit</button>`;
