import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { PageProps, type BreadcrumbItem } from '@/types';
import { User } from '@/types/index';
import { Head, Link } from '@inertiajs/react';
import { CircleCheckBig } from 'lucide-react';
interface UserProps extends PageProps {
    users: User[];
    queryParams: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'List of Users',
        href: '/users',
    },
];

export default function Index({ users, flash }: UserProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="List of Users" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {flash?.message && (
                    <Alert>
                        <CircleCheckBig className="h-4 w-4" />
                        <AlertDescription>{flash?.message}</AlertDescription>
                    </Alert>
                )}
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-10 md:min-h-min">
                    <div className="flex w-full items-start justify-end">
                        <Input type="email" placeholder="Search..." className="max-w-xs flex-1" />
                        <Link href={route('users.create')}>
                            <Button className="ml-3 cursor-pointer">Create</Button>
                        </Link>
                    </div>
                    <br />
                    <Table>
                        {users.length === 0 && <TableCaption>No Users Found.</TableCaption>}
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{user?.name}</TableCell>
                                    <TableCell className="font-medium">{user?.email}</TableCell>
                                    <TableCell>
                                        <Link href={route('users.show', user?.id)}>
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
