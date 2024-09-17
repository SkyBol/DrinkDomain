-- USERS
INSERT INTO users (id, email, first_name, last_name, password)
VALUES
('ba804cb9-fa14-42a5-afaf-be488742fc54', 'admin@example.com', 'James', 'Bond', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'),  -- Password: 1234
('0d8fa44c-54fd-4cd0-ace9-2a7da57992de', 'user@example.com', 'Tyler', 'Durden', '$2a$10$TM3PAYG3b.H98cbRrHqWa.BM7YyCqV92e/kUTBfj85AjayxGZU7d6'); -- Password: 1234

-- ROLES
MERGE INTO role (id, name)
KEY(id)
VALUES
('d29e709c-0ff1-4f4c-a7ef-09f656c390f1', 'DEFAULT'),
('ab505c92-7280-49fd-a7de-258e618df074', 'ADMIN'),
('c6aee32d-8c35-4481-8b3e-a876a39b0c02', 'USER');

-- AUTHORITIES
MERGE INTO authority (id, name)
KEY(id)
VALUES
('2ebf301e-6c61-4076-98e3-2a38b31daf86', 'DEFAULT'),
('76d2cbf6-5845-470e-ad5f-2edb9e09a868', 'USER_MODIFY'),
('21c942db-a275-43f8-bdd6-d048c21bf5ab', 'USER_DELETE');

-- Assign roles to users
MERGE INTO users_role (users_id, role_id)
KEY(users_id, role_id)
VALUES
('ba804cb9-fa14-42a5-afaf-be488742fc54', 'd29e709c-0ff1-4f4c-a7ef-09f656c390f1'),
('0d8fa44c-54fd-4cd0-ace9-2a7da57992de', 'd29e709c-0ff1-4f4c-a7ef-09f656c390f1'),
('ba804cb9-fa14-42a5-afaf-be488742fc54', 'ab505c92-7280-49fd-a7de-258e618df074'),
('ba804cb9-fa14-42a5-afaf-be488742fc54', 'c6aee32d-8c35-4481-8b3e-a876a39b0c02');

-- Assign authorities to roles
MERGE INTO role_authority (role_id, authority_id)
KEY(role_id, authority_id)
VALUES
('d29e709c-0ff1-4f4c-a7ef-09f656c390f1', '2ebf301e-6c61-4076-98e3-2a38b31daf86'),
('ab505c92-7280-49fd-a7de-258e618df074', '76d2cbf6-5845-470e-ad5f-2edb9e09a868'),
('c6aee32d-8c35-4481-8b3e-a876a39b0c02', '21c942db-a275-43f8-bdd6-d048c21bf5ab');

-- Test Drinks
INSERT INTO drink (id, id_drink, str_drink, str_tags, str_ingredient1, str_measure1, str_glass, str_alcoholic, str_category, str_creative_commons_confirmed, str_drink_thumb, str_ingredient2, STR_INSTRUCTIONS)
VALUES
('1d269fb3-50d7-4c6f-8d6c-ae5029d8bfc1', '1', 'Test Drink 1', 'Shot', 'Alcohol', '1/2 test', 'Test glass', 'alcoholic', 'empty', 'yes', '', '', ''),
('d5fa8c08-8942-49b7-adef-e10664944e0b', '2', 'Test Drink 2', 'Tequila', 'Vodka', '2 tests', 'Shot glass', 'alcoholic', 'empty', 'yes', '', '', ''),
('adc7a7ca-76c0-4920-82b0-cc7365da0260', '3', 'Test Drink 3', 'Cocktail', 'Rum', '3 1/4 tests', 'Glass', 'alcoholic', 'empty', 'yes', '', '', '');
