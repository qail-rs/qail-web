# QAIL Recipes

Common patterns and real-world examples for QAIL queries.

## Authentication

### Login Check
```qail
get::users•@id@password_hash[email=$1][lim=1]
```

### Session Validation
```qail
get::sessions•@user_id[token=$1][expired_at>now()]
```

## CRUD Operations

### Paginated List
```qail
get::posts•@id@title@created_at[^!created_at][lim=20]
```

### Soft Delete
```qail
set::users•[deleted_at=now()][id=$1]
```

### Bulk Fetch by IDs
```qail
get::orders•@*[id=$1]
```
*Bind `$1` to an array for `IN` clause behavior.*

## Joins & Relations

### User with Profile
```qail
get::users->profiles•@users.id@users.email@profiles.avatar
```

### Orders with Items
```qail
get::orders->order_items•@orders.id@order_items.product_id@order_items.qty[orders.id=$1]
```

## Aggregations

### Count Active Users
```qail
get::users•@id#count[active=true]
```

### Sum of Sales
```qail
get::sales•@amount#sum[created_at>='2024-01-01']
```

## Migrations

### Create Users Table
```qail
make::users•@id:uuid^pk@email:str^uniq@created_at:timestamp
```

### Add Column
```qail
mod::users•+phone:str?
```

### Drop Column
```qail
mod::users•-legacy_field
```

## Window Functions (v0.4+)

### Rank by Amount
```qail
over::sales•@rank:rank()^!amount
```

### Row Number Partitioned
```qail
over::orders•@row:row_number(){Part=customer_id}^created_at
```

## CTEs (v0.4+)

### Top N Subquery
```qail
with::top_customers•@*[total_spent>1000][lim=100]
```
