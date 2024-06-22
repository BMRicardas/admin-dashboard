import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login">LOGIN</TabsContent>
      <TabsContent value="register">REGISTER</TabsContent>
    </Tabs>
  );
}
