# Generated by Django 4.1.4 on 2022-12-28 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('networking', '0004_alter_networkinginformation_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='networkinginformation',
            name='created_at',
            field=models.DateField(auto_now=True),
        ),
    ]