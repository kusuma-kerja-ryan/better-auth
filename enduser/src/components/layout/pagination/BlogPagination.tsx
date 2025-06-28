"use client"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogPagination({
    totalPage
}: {
    totalPage: number
}) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get("page")) || 1

    const handleChangePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("page", newPage.toString())
        router.push(`?${params.toString()}`)
    }

    const handleNext = () => {
        if (currentPage < totalPage) {
            handleChangePage(currentPage + 1)
        }
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            handleChangePage(currentPage - 1)
        }
    }

    const renderPages = () => {
        const pages = [];

        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPage, currentPage + 1);

        if (startPage > 1) {
            pages.push(
                <PaginationItem key={1}>
                    <PaginationLink
                        onClick={() => handleChangePage(1)}
                        isActive={currentPage === 1}
                        className="cursor-pointer"
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
            );
            if (startPage > 2) {
                pages.push(<PaginationEllipsis key="start-ellipsis" />);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        onClick={() => handleChangePage(i)}
                        isActive={currentPage === i}
                        className="cursor-pointer"
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        if (endPage < totalPage) {
            if (endPage < totalPage - 1) {
                pages.push(<PaginationEllipsis key="end-ellipsis" />);
            }
            pages.push(
                <PaginationItem key={totalPage}>
                    <PaginationLink
                        onClick={() => handleChangePage(totalPage)}
                        isActive={currentPage === totalPage}
                        className="cursor-pointer"
                    >
                        {totalPage}
                    </PaginationLink>
                </PaginationItem>
            );
        }

        return pages;
    };

    return (
        <div className={`w-full flex items-center justify-center ${totalPage <= 1 && 'hidden'}`}>
            <Pagination className="w-full justify-center">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={currentPage > 1 ? handlePrevious : undefined}
                            aria-disabled={currentPage <= 1}
                        />
                    </PaginationItem>
                    {renderPages()}
                    <PaginationItem>
                        <PaginationNext
                            onClick={currentPage < totalPage ? handleNext : undefined}
                            aria-disabled={currentPage >= totalPage}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
