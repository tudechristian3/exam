import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { PageProps, type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create User',
        href: '/users/create',
    },
];

export default function Create({ auth }: PageProps) {
    const { data, setData, post, reset, errors, isDirty } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        post(route('users.store'), {
            onSuccess: () => reset(), // Clear form after successful submission
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create User" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-10 md:min-h-min">
                    <form onSubmit={handleSubmit}>
                        <Label>Name</Label>
                        <Input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="John Doe" />
                        <InputError message={errors.name} className="mt-2 text-red-600" />
                        <br />
                        <Label>Email</Label>
                        <Input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} placeholder="johndoe@example.com" />
                        <InputError message={errors.email} className="mt-2 text-red-600" />
                        <br />
                        <Label>Password</Label>
                        <Input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} />
                        <InputError message={errors.password} className="mt-2 text-red-600" />
                        <br />
                        <Label>Confirm Password</Label>
                        <Input
                            type="password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        <InputError message={errors.password_confirmation} className="mt-2 text-red-600" />
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
