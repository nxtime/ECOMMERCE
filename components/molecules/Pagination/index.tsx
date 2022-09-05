import Button from "@/components/atoms/Button";
import StyledPagination from "./styles";

interface PaginationType {
    numberOfPages: number;
    className?: "bordered" | "contained";
    currentPage: number;
    setCurrentPage(page: number): void;
}

export default function Pagination({ numberOfPages, currentPage, setCurrentPage, className }: PaginationType) {
    const pages: number[] = [];

    for (let numPage = 1; numPage <= numberOfPages; numPage += 1) {
        if (currentPage < numPage + 2 && numPage - 1 <= currentPage) {
            pages.push(numPage);
        }
    }

    if (currentPage > numberOfPages) setCurrentPage(1);

    return (
        <StyledPagination>
            <div className="pagination-container">
                <Button onClick={() => setCurrentPage(1)}>{"<<"}</Button>
                <Button onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}>{"<"}</Button>
                {pages.map((page) => (
                    <Button
                        key={page}
                        className={page === currentPage ? `${className} active` : `${className}`}
                        color={page === currentPage ? "secondary" : "primary"}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </Button>
                ))}
                <Button onClick={() => currentPage !== numberOfPages && setCurrentPage(currentPage + 1)}>{">"}</Button>
                <Button onClick={() => setCurrentPage(numberOfPages)}>{">>"}</Button>
            </div>
            <div className="pagination-info">
                <h5>
                    Página {currentPage} de {numberOfPages}
                </h5>
            </div>
        </StyledPagination>
    );
}
