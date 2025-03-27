import ConfirmDeleteModal from '@/components/ConfirmDeleteModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { PageProps, type BreadcrumbItem } from '@/types';
import { Products } from '@/types/Products';
import { Head, Link, useForm } from '@inertiajs/react';
import { Pencil, Trash } from 'lucide-react';
import { useState } from 'react';

interface EducationProps extends PageProps {
    product: Products;
    queryParams: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Product Detail',
        href: '/products',
    },
];

export default function Show({ product }: EducationProps) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const { delete: deleteEducation } = useForm();
    const handleDelete = () => {
        deleteEducation(route('products.destroy', product?.id));
        setIsDeleteModalOpen(false);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="List of Occupation" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-10 md:min-h-min">
                    <Card>
                        <CardHeader className="border-border border-b pb-3">
                            <div className="flex w-full items-center">
                                <CardTitle>{product?.name}</CardTitle>
                                <div className="ml-auto flex gap-2">
                                    <Link href={route('products.edit', product?.id)}>
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
                        <CardContent>Description: {product?.description}</CardContent>
                        <CardContent>Price: {product?.price}</CardContent>
                        <CardContent>Owned by: {product?.user?.name}</CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
