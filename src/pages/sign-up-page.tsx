import { Separator } from "@/components/ui";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export function SignupPage() {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>UNAD - Proyecto I</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" placeholder="Nombre de usuario" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Correo Electronico</Label>
                <Input id="name" placeholder="usuario@unad.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Contraseña</Label>
                <Input id="name" type="password" placeholder="" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Repetir Contraseña</Label>
                <Input id="name" type="password" placeholder="" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-stretch flex-col gap-4">
          <Button className="grow w-full">
            <Link to={"/dashboard/usuarios"}>Registro</Link>
          </Button>
          <Separator />
          <span className="text-sm">Ya tienes una cuenta? inicia session</span>
          <Button className="grow w-full" variant={"secondary"}>
            <Link to={"/ingreso"}>Ir a Ingreso</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
