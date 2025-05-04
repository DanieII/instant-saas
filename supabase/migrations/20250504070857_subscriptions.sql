create table "public"."subscriptions" (
    "user_id" uuid not null,
    "created_at" timestamp with time zone not null default now(),
    "customer_id" text not null,
    "price_id" text not null
);


alter table "public"."subscriptions" enable row level security;

CREATE UNIQUE INDEX subscriptions_customer_id_key ON public.subscriptions USING btree (customer_id);

CREATE UNIQUE INDEX subscriptions_pkey ON public.subscriptions USING btree (user_id);

alter table "public"."subscriptions" add constraint "subscriptions_pkey" PRIMARY KEY using index "subscriptions_pkey";

alter table "public"."subscriptions" add constraint "subscriptions_customer_id_key" UNIQUE using index "subscriptions_customer_id_key";

alter table "public"."subscriptions" add constraint "subscriptions_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."subscriptions" validate constraint "subscriptions_user_id_fkey";

grant delete on table "public"."subscriptions" to "anon";

grant insert on table "public"."subscriptions" to "anon";

grant references on table "public"."subscriptions" to "anon";

grant select on table "public"."subscriptions" to "anon";

grant trigger on table "public"."subscriptions" to "anon";

grant truncate on table "public"."subscriptions" to "anon";

grant update on table "public"."subscriptions" to "anon";

grant delete on table "public"."subscriptions" to "authenticated";

grant insert on table "public"."subscriptions" to "authenticated";

grant references on table "public"."subscriptions" to "authenticated";

grant select on table "public"."subscriptions" to "authenticated";

grant trigger on table "public"."subscriptions" to "authenticated";

grant truncate on table "public"."subscriptions" to "authenticated";

grant update on table "public"."subscriptions" to "authenticated";

grant delete on table "public"."subscriptions" to "service_role";

grant insert on table "public"."subscriptions" to "service_role";

grant references on table "public"."subscriptions" to "service_role";

grant select on table "public"."subscriptions" to "service_role";

grant trigger on table "public"."subscriptions" to "service_role";

grant truncate on table "public"."subscriptions" to "service_role";

grant update on table "public"."subscriptions" to "service_role";

create policy "Enable delete for users based on user_id"
on "public"."subscriptions"
as permissive
for delete
to public
using ((( SELECT auth.uid() AS uid) = user_id));


create policy "Enable insert for users based on user_id"
on "public"."subscriptions"
as permissive
for insert
to public
with check ((( SELECT auth.uid() AS uid) = user_id));


create policy "Enable users to view their own data only"
on "public"."subscriptions"
as permissive
for select
to authenticated
using ((( SELECT auth.uid() AS uid) = user_id));


create policy "Update policy: Enable update for users based on user_id"
on "public"."subscriptions"
as permissive
for update
to public
using ((( SELECT auth.uid() AS uid) = user_id));



