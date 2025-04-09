import ConfirmDeleteModal from '@/components/ConfirmDeleteModal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { PageProps, type BreadcrumbItem } from '@/types';
import { Tasks } from '@/types/Tasks';
import { Head, Link, useForm } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
interface TaskProps extends PageProps {
    task: Tasks;
    queryParams: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Task Detail',
        href: '/tasks',
    },
];

type BadgeVariant = 'pending' | 'in_progress' | 'for_review' | 'completed' | 'default';

const getStatusVariant = (status: string): BadgeVariant => {
    switch (status.toLowerCase()) {
        case 'pending':
            return 'pending'; // red
        case 'in_progress':
            return 'in_progress'; // blue
        case 'for_review':
            return 'for_review'; // orange
        case 'completed':
            return 'completed'; // green
        default:
            return 'default';
    }
};

export default function Show({ task }: TaskProps) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const { delete: deleteTask } = useForm();
    const handleDelete = () => {
        deleteTask(route('tasks.destroy', task?.id));
        setIsDeleteModalOpen(false);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Task Detail" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-10 md:min-h-min">
                    <Card>
                        <CardHeader className="border-border border-b pb-3">
                            <div className="flex w-full items-center">
                                <CardTitle>{task?.title}</CardTitle>
                                <div className="ml-auto flex gap-2">
                                    <Link href={route('tasks.edit', task?.id)}>
                                        <Button className="cursor-pointer" variant="outline" size="sm">
                                            <Pencil className="mr-1 h-4 w-4" />
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button variant="destructive" size="sm" onClick={() => setIsDeleteModalOpen(true)}>
                                        <Trash className="mr-1 h-4 w-4" />
                                        Delete
                                    </Button>
                                    <ConfirmDeleteModal
                                        isOpen={isDeleteModalOpen}
                                        onClose={() => setIsDeleteModalOpen(false)}
                                        onConfirm={handleDelete}
                                        title="Confirm Product Deletion"
                                        message="Are you sure you want to delete this product?"
                                        cancelButtonText="Cancel"
                                    />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>Description: {task?.description}</CardContent>
                        <CardContent>
                            Status: <Badge variant={getStatusVariant(task?.status)}>{task?.status}</Badge>
                        </CardContent>
                        <CardContent>Assign to: {task?.user?.name}</CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
