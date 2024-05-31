import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Assets = () => {
  return (
    <section className="bg-white text-black">    
    <h1 className="text-xl font-semibold text-gray-500">Asset Hub</h1>
    <div className="flex items-center justify-end ">
<Dialog>
  <DialogTrigger asChild>
  <Button variant="outline" className=" text-blue-500">
        <PlusIcon className="mr-2 h-4 w-4"/> Add Asset
      </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  </section>
  )
}

export default Assets
