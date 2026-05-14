"use client";

import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlert({destination}) {
    const router = useRouter();
    const {destinationName, _id} = destination;
    const handleDelete = async () =>{
        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: "DELETE",
            headers:{
                'content-type': 'application/json'
            },
        });
        if (!res.ok) {
            console.error("Failed to delete destination", res.statusText);
            return;
        }
        const data = await res.json();
        router.push("/destinations");
        console.log(data);
    }

  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}