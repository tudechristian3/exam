import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { PageProps, type BreadcrumbItem } from '@/types';
import { User } from '@/types/index';
import { Head, useForm } from '@inertiajs/react';
interface TaskProps extends PageProps {
    users: User[];
    queryParams: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Task',
        href: '/tasks/create',
    },
];

export default function Create({ users }: TaskProps) {
    const { data, setData, post, reset, errors, isDirty } = useForm({
        title: '',
        user_id: '',
        description: '',
        status: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('tasks.store'), {
            onSuccess: () => reset(), // Clear form after successful submission
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Task" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-10 md:min-h-min">
                    <form onSubmit={handleSubmit}>
                        <Label>Task Title</Label>
                        <Input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} placeholder="Task Title" />
                        <InputError message={errors.title} className="mt-2 text-red-600" />
                        <br />
                        <Label>Assign to</Label>
                        <Select value={String(data.user_id)} onValueChange={(value) => setData('user_id', value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select an Employee" />
                            </SelectTrigger>
                            <SelectContent>
                                {users.map((user) => (
                                    <SelectItem key={user.id} value={String(user.id)}>
                                        {user.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={errors.user_id} className="mt-2 text-red-600" />
                        <br />
                        <Label>Status</Label>
                        <Select value={String(data.status)} onValueChange={(value) => setData('status', value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select an Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="In-Progress">In-Progress</SelectItem>
                                <SelectItem value="For Review">For Review</SelectItem>
                                <SelectItem value="Completed">Completed</SelectItem>
                            </SelectContent>
                        </Select>
                        <InputError message={errors.status} className="mt-2 text-red-600" />
                        <br />
                        <Label>Task description</Label>
                        <Textarea value={data.description} onChange={(e) => setData('description', e.target.value)} placeholder="short description" />
                        <InputError message={errors.description} className="mt-2 text-red-600" />
                        <br />
                        <Button type="submit" className="hover:cursor-pointer" disabled={!isDirty}>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
