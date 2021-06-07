class User
{
    endurance = 100;

    Saut(endurance)
    {
        endurance -= 10;

        return null;
    }

    Cours(endurance)
    {
        endurance -= 8;
    }

    Repos(endurance)
    {
        endurance += 30;
    }
}