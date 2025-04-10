import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { PageProps, type BreadcrumbItem } from '@/types';
import { User } from '@/types/index';
import { Products } from '@/types/Products';
import { Tasks } from '@/types/Tasks';
import { Head, Link } from '@inertiajs/react';
import { CheckCircle, Package, Users } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface ProductsProps extends PageProps {
    products: Products[];
    users: User[];
    tasks: Tasks[];
    queryParams: Record<string, string>;
}

export default function Dashboard({ products, users, tasks }: ProductsProps) {
    // Calculate stats from actual data
    const stats = {
        tasks: {
            total: tasks.length,
        },
        products: {
            total: products.length,
        },
        users: {
            total: users.length,
        },
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Tasks Card */}
                    <Card className="border-sidebar-border/70 dark:border-sidebar-border">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Tasks</CardTitle>
                            <CheckCircle className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.tasks.total}</div>
                            <Link href="/tasks" className="text-primary text-xs hover:underline">
                                View more
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Products Card */}
                    <Card className="border-sidebar-border/70 dark:border-sidebar-border">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Products</CardTitle>
                            <Package className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.products.total}</div>
                            <Link href="/products" className="text-primary text-xs hover:underline">
                                View more
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Users Card */}
                    <Card className="border-sidebar-border/70 dark:border-sidebar-border">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Users</CardTitle>
                            <Users className="text-muted-foreground h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.users.total}</div>
                            <Link href="/users" className="text-primary text-xs hover:underline">
                                View more
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
