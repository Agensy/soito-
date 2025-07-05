// Barrel exports otimizados - apenas componentes realmente utilizados
// Organizados por frequência de uso para melhor tree-shaking

// Componentes base mais utilizados
export { Button } from "./button"
export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"
export { Input } from "./input"
export { Label } from "./label"

// Componentes de formulário
export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField } from "./form"
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
export { Textarea } from "./textarea"
export { Checkbox } from "./checkbox"

// Componentes de navegação
export { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./navigation-menu"

// Componentes de layout
export { Separator } from "./separator"
export { Badge } from "./badge"
export { Avatar, AvatarFallback, AvatarImage } from "./avatar"

// Componentes de interação
export { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
export { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "./toast"
export { Toaster } from "./toaster"

// Componentes menos utilizados (carregados sob demanda)
export { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion"
export { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

// Componentes especializados (lazy load)
export type { ChartConfig } from "./chart"
