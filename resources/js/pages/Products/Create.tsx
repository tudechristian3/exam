import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { PageProps, type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create products',
        href: '/products/create',
    },
];

export default function Create({ auth }: PageProps) {
    const { data, setData, post, reset, errors, isDirty } = useForm({
        name: '',
        user_id: auth?.user?.id,
        price: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('products.store'), {
            onSuccess: () => reset(), // Clear form after successful submission
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-10 md:min-h-min">
                    <form onSubmit={handleSubmit}>
                        <Label>Product Name</Label>
                        <Input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="Laptop" />
                        <InputError message={errors.name} className="mt-2 text-red-600" />
                        <br />
                        <Label>Product price</Label>
                        <Input type="number" value={data.price} onChange={(e) => setData('price', e.target.value)} />
                        <InputError message={errors.price} className="mt-2 text-red-600" />
                        <br />
                        <Label>Product description</Label>
                        <Input
                            type="text"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="short description"
                        />
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
