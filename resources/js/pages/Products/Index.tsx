import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { PageProps, type BreadcrumbItem } from '@/types';
import { Products } from '@/types/Products';
import { Head, Link, router } from '@inertiajs/react';
import { CircleCheckBig } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useDebounce } from '@/hooks/use-debounce'
interface ProductsProps extends PageProps {
    products: Products[];
    queryParams: Record<string, string>;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'List of Products',
        href: '/products',
    },
];

export default function Index({ products, flash, queryParams }: ProductsProps) {
    const [search, setSearch] = useState(queryParams.search || '');

    const debouncedSearch = useDebounce((value: string) => {
            router.get(route('products.index'), { search: value }, {
                preserveState: true,
                preserveScroll: true,
            });
        }, 300);

        const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
            debouncedSearch(e.target.value);
        };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="List of Products" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {flash?.message && (
                    <Alert>
                        <CircleCheckBig className="h-4 w-4" />
                        <AlertDescription>{flash?.message}</AlertDescription>
                    </Alert>
                )}
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-10 md:min-h-min">
                    <div className="flex w-full items-start justify-end">
                            <Input
                                placeholder="Search tasks..."
                                value={search}
                                onChange={handleSearch}
                                className="max-w-xs flex-1"
                            />
                        <Link href={route('products.create')}>
                            <Button className="ml-3 cursor-pointer">Create</Button>
                        </Link>
                    </div>
                    <Table>
                        {products.length === 0 && <TableCaption>No Products Found.</TableCaption>}
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{product?.name}</TableCell>
                                    <TableCell className="font-medium">₱{product?.price}</TableCell>
                                    <TableCell>
                                        <Link href={route('products.show', product.id)}>
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
