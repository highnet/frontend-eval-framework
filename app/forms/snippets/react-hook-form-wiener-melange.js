export const reactHookFormWienerMelange = `import { useForm, Controller } from "react-hook-form"
// Use Controller for custom web components
<Controller name="email" control={control}
  render={({ field }) => <wm-input {...field} />}
/>`;
