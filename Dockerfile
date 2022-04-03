FROM golang:1.13

WORKDIR /app

COPY ./server/go.mod .
COPY ./server/go.sum .

RUN go mod tidy

COPY ./server .

EXPOSE 8091

RUN go build -o ./run main.go

CMD ["./run"]
