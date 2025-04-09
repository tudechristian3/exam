import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { PageProps, type BreadcrumbItem } from '@/types';
import { Tasks } from '@/types/Tasks';
import { Head, Link } from '@inertiajs/react';
import { CircleCheckBig } from 'lucide-react';
interface TaskProps extends PageProps {
    tasks: Tasks[];
    queryParams: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'List of Tasks',
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

export default function Index({ tasks, flash }: TaskProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="List of Tasks" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {flash?.message && (
                    <Alert>
                        <CircleCheckBig className="h-4 w-4" />
                        <AlertDescription>{flash?.message}</AlertDescription>
                    </Alert>
                )}
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-10 md:min-h-min">
                    <div className="flex w-full items-start justify-end">
                        <Link href={route('tasks.create')}>
                            <Button className="ml-3 cursor-pointer">Create</Button>
                        </Link>
                    </div>
                    <br />
                    <Table>
                        {tasks.length === 0 && <TableCaption>No Tasks Found.</TableCaption>}
                        <TableHeader>
                            <TableRow>
                                <TableHead>Task Name</TableHead>
                                <TableHead>Assignee</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tasks.map((task, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{task?.title}</TableCell>
                                    <TableCell className="font-medium">{task?.user?.name}</TableCell>
                                    <TableCell className="font-medium">
                                        <Badge variant={getStatusVariant(task?.status)}>{task?.status}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Link href={route('tasks.show', task.id)}>
                                            <Button className="cursor-pointer">Show</Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
