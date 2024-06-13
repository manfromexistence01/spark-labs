import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
}

// 'use client';
// import * as Clerk from '@clerk/elements/common';
// import * as SignIn from '@clerk/elements/sign-in';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Loader } from 'lucide-react';
// import * as React from "react";
// import type { SVGProps } from "react";

// const Github = (props: SVGProps<SVGSVGElement>) => <svg viewBox="0 0 256 250" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" /></svg>;
// const Google = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" {...props}><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" /><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" /><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" /><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" /></svg>;

// export default function SignInPage() {
//   return (
//     <div className="grid w-full grow items-center px-4 justify-center min-h-screen">
//       <SignIn.Root>
//         <Clerk.Loading>
//           {(isGlobalLoading) => (
//             <>
//               <SignIn.Step name="start">
//                 <Card className="w-full sm:w-96">
//                   <CardHeader>
//                     <CardTitle>Sign in to Acme Co</CardTitle>
//                     <CardDescription>Welcome back! Please sign in to continue</CardDescription>
//                   </CardHeader>
//                   <CardContent className="grid gap-y-4">
//                     <div className="grid grid-cols-2 gap-x-4">
//                       <Clerk.Connection name="github" asChild>
//                         <Button size="sm" variant="outline" disabled={isGlobalLoading}>
//                           <Clerk.Loading scope="provider:github">
//                             {(isLoading) =>
//                               isLoading ? (
//                                 <Loader className="size-4 animate-spin" />
//                               ) : (
//                                 <>

//                                   <Github className="mr-2 size-4" />
//                                   GitHub
//                                 </>
//                               )
//                             }
//                           </Clerk.Loading>
//                         </Button>
//                       </Clerk.Connection>
//                       <Clerk.Connection name="google" asChild>
//                         <Button size="sm" variant="outline" disabled={isGlobalLoading}>
//                           <Clerk.Loading scope="provider:google">
//                             {(isLoading) =>
//                               isLoading ? (
//                                 <Loader className="size-4 animate-spin" />
//                               ) : (
//                                 <>
//                                   <Google className="mr-2 size-4" />
//                                   Google
//                                 </>
//                               )
//                             }
//                           </Clerk.Loading>
//                         </Button>
//                       </Clerk.Connection>
//                     </div>
//                     <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
//                       or
//                     </p>
//                     <Clerk.Field name="identifier" className="space-y-2">
//                       <Clerk.Label asChild>
//                         <Label>Email address</Label>
//                       </Clerk.Label>
//                       <Clerk.Input type="email" required asChild>
//                         <Input />
//                       </Clerk.Input>
//                       <Clerk.FieldError className="block text-sm text-destructive" />
//                     </Clerk.Field>
//                   </CardContent>
//                   <CardFooter>
//                     <div className="grid w-full gap-y-4">
//                       <SignIn.Action submit asChild>
//                         <Button disabled={isGlobalLoading}>
//                           <Clerk.Loading>
//                             {(isLoading) => {
//                               return isLoading ? <Loader className="size-4 animate-spin" /> : 'Continue';
//                             }}
//                           </Clerk.Loading>
//                         </Button>
//                       </SignIn.Action>

//                       <Button variant="link" size="sm" asChild>
//                         <Link href="/sign-up">Don&apos;t have an account? Sign up</Link>
//                       </Button>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               </SignIn.Step>

//               <SignIn.Step name="choose-strategy">
//                 <Card className="w-full sm:w-96">
//                   <CardHeader>
//                     <CardTitle>Use another method</CardTitle>
//                     <CardDescription>Facing issues? You can use any of these methods to sign in.</CardDescription>
//                   </CardHeader>
//                   <CardContent className="grid gap-y-4">
//                     <SignIn.SupportedStrategy name="email_code" asChild>
//                       <Button variant="link" disabled={isGlobalLoading}>
//                         Email code
//                       </Button>
//                     </SignIn.SupportedStrategy>
//                     <SignIn.SupportedStrategy name="password" asChild>
//                       <Button variant="link" disabled={isGlobalLoading}>
//                         Password
//                       </Button>
//                     </SignIn.SupportedStrategy>
//                   </CardContent>
//                   <CardFooter>
//                     <div className="grid w-full gap-y-4">
//                       <SignIn.Action navigate="previous" asChild>
//                         <Button disabled={isGlobalLoading}>
//                           <Clerk.Loading>
//                             {(isLoading) => {
//                               return isLoading ? <Loader className="size-4 animate-spin" /> : 'Go back';
//                             }}
//                           </Clerk.Loading>
//                         </Button>
//                       </SignIn.Action>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               </SignIn.Step>

//               <SignIn.Step name="verifications">
//                 <SignIn.Strategy name="password">
//                   <Card className="w-full sm:w-96">
//                     <CardHeader>
//                       <CardTitle>Check your email</CardTitle>
//                       <CardDescription>Enter the verification code sent to your email</CardDescription>
//                       <p className="text-sm text-muted-foreground">
//                         Welcome back <SignIn.SafeIdentifier />
//                       </p>
//                     </CardHeader>
//                     <CardContent className="grid gap-y-4">
//                       <Clerk.Field name="password" className="space-y-2">
//                         <Clerk.Label asChild>
//                           <Label>Password</Label>
//                         </Clerk.Label>
//                         <Clerk.Input type="password" asChild>
//                           <Input />
//                         </Clerk.Input>
//                         <Clerk.FieldError className="block text-sm text-destructive" />
//                       </Clerk.Field>
//                     </CardContent>
//                     <CardFooter>
//                       <div className="grid w-full gap-y-4">
//                         <SignIn.Action submit asChild>
//                           <Button disabled={isGlobalLoading}>
//                             <Clerk.Loading>
//                               {(isLoading) => {
//                                 return isLoading ? <Loader className="size-4 animate-spin" /> : 'Continue';
//                               }}
//                             </Clerk.Loading>
//                           </Button>
//                         </SignIn.Action>
//                         <SignIn.Action navigate="choose-strategy" asChild>
//                           <Button size="sm" variant="link">
//                             Use another method
//                           </Button>
//                         </SignIn.Action>
//                       </div>
//                     </CardFooter>
//                   </Card>
//                 </SignIn.Strategy>

//                 <SignIn.Strategy name="email_code">
//                   <Card className="w-full sm:w-96">
//                     <CardHeader>
//                       <CardTitle>Check your email</CardTitle>
//                       <CardDescription>Enter the verification code sent to your email</CardDescription>
//                       <p className="text-sm text-muted-foreground">
//                         Welcome back <SignIn.SafeIdentifier />
//                       </p>
//                     </CardHeader>
//                     <CardContent className="grid gap-y-4">
//                       <Clerk.Field name="code" className="space-y-2">
//                         <Clerk.Label className="sr-only">Verification code</Clerk.Label>
//                         <div className="grid items-center justify-center gap-y-2">
//                           <div className="flex justify-center text-center">
//                             <Clerk.Input
//                               type="otp"
//                               autoSubmit
//                               className="flex justify-center has-[:disabled]:opacity-50"
//                               render={({ value, status }) => {
//                                 return (
//                                   <div
//                                     data-status={status}
//                                     className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=cursor]:ring-1 data-[status=selected]:ring-1 data-[status=cursor]:ring-ring data-[status=selected]:ring-ring"
//                                   >
//                                     {value}
//                                   </div>
//                                 );
//                               }}
//                             />
//                           </div>
//                           <Clerk.FieldError className="block text-center text-sm text-destructive" />
//                           <SignIn.Action
//                             asChild
//                             resend
//                             className="text-muted-foreground"
//                             fallback={({ resendableAfter }) => (
//                               <p className="text-sm text-muted-foreground">
//                                 Didn&apos;t recieve a code? Resend (
//                                 <span className="tabular-nums">{resendableAfter}</span>)
//                               </p>
//                             )}
//                           >
//                             <Button variant="link" size="sm">
//                               Didn&apos;t recieve a code? Resend
//                             </Button>
//                           </SignIn.Action>
//                           <Clerk.FieldError className="block text-center text-sm text-destructive" />
//                         </div>
//                       </Clerk.Field>
//                     </CardContent>
//                     <CardFooter>
//                       <div className="grid w-full gap-y-4">
//                         <SignIn.Action submit asChild>
//                           <Button disabled={isGlobalLoading}>
//                             <Clerk.Loading>
//                               {(isLoading) => {
//                                 return isLoading ? <Loader className="size-4 animate-spin" /> : 'Continue';
//                               }}
//                             </Clerk.Loading>
//                           </Button>
//                         </SignIn.Action>
//                         <SignIn.Action navigate="choose-strategy" asChild>
//                           <Button size="sm" variant="link">
//                             Use another method
//                           </Button>
//                         </SignIn.Action>
//                       </div>
//                     </CardFooter>
//                   </Card>
//                 </SignIn.Strategy>
//               </SignIn.Step>
//             </>
//           )}
//         </Clerk.Loading>
//       </SignIn.Root>
//     </div>
//   );
// }